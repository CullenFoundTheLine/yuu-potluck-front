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
                </div>
        );
}
