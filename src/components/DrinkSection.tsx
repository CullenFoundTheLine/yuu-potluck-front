import { useState } from "react";

type DrinkItem = {
        name: string;
        hasType: boolean;
        hasPack: boolean;
};

const drinkItems: DrinkItem[] = [
        { name: "Water", hasType: false, hasPack: false },
        { name: "Juice", hasType: true, hasPack: false },
        { name: "Soda", hasType: true, hasPack: true },
];

export default function DrinkSection() {
        const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
        const [details, setDetails] = useState<{ [key: string]: { type: string; pack: string; quantity: string } }>({});

        const toggle = (name: string) => {
                setSelected((prev) => ({ ...prev, [name]: !prev[name] }));
        };

        const update = (name: string, field: string, value: string) => {
                setDetails((prev) => ({
                        ...prev,
                        [name]: { ...prev[name], [field]: value },
                }));
        };

        const handleSubmit = async () => {
                const drinkData = Object.keys(selected)
                        .filter((name) => selected[name])
                        .map((name) => ({
                                drinkItem: name,
                                drinkType: details[name]?.type || "",
                                packSize: details[name]?.pack || "",
                                drinkQuantity: parseInt(details[name]?.quantity) || 0,
                        }));

                for (const drink of drinkData) {
                        await fetch("http://localhost:8080/api/entries", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
    foodType: "Drink",
    foodItem: drink.drinkType ? `${drink.drinkType} ${drink.drinkItem}` : drink.drinkItem,
    servings: drink.drinkQuantity,
    attending: true,
    notes: drink.packSize ? `${drink.packSize} pack` : null,
}),
                        });
                }

                alert("Drinks submitted!");
        };

        return (
                <div className="drink-section">
                        {drinkItems.map((item) => (
                                <div key={item.name} className="drink-card p-3 mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                                <input
                                                        type="checkbox"
                                                        id={item.name}
                                                        checked={!!selected[item.name]}
                                                        onChange={() => toggle(item.name)}
                                                />
                                                <label htmlFor={item.name}><strong>{item.name}</strong></label>
                                        </div>

                                        {selected[item.name] && (
                                                <div className="drink-details mt-2 d-flex flex-column gap-2">
                                                        {item.hasType && (
                                                                <input
                                                                        type="text"
                                                                        placeholder="Type (e.g. Orange, Cola)"
                                                                        value={details[item.name]?.type || ""}
                                                                        onChange={(e) => update(item.name, "type", e.target.value)}
                                                                />
                                                        )}
                                                        {item.hasPack && (
                                                                <select
                                                                        value={details[item.name]?.pack || ""}
                                                                        onChange={(e) => update(item.name, "pack", e.target.value)}
                                                                >
                                                                        <option value="">Pack size</option>
                                                                        <option value="12">12 pack</option>
                                                                        <option value="24">24 pack</option>
                                                                </select>
                                                        )}
                                                        <input
                                                                type="number"
                                                                placeholder="Quantity"
                                                                min={1}
                                                                value={details[item.name]?.quantity || ""}
                                                                onChange={(e) => update(item.name, "quantity", e.target.value)}
                                                        />
                                                </div>
                                        )}
                                </div>
                        ))}
                        <button onClick={handleSubmit} className="btn btn-primary mt-3">
                                Submit Drinks
                        </button>
                </div>
        );
}
