import Navbar from "./components/Navbar"
import Form from "./components/Form"
import List from "./components/List"
import { useState } from "react"

export default function App () {

    const [items, setItems] = useState([
        { id: 1, text: "Text 01" },
        { id: 2, text: "Text 10" },
        { id: 3, text: "Text 11" },
    ])

    const addItem = (item) => setItems([...items, item])

    const deleteItem = (item) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setItems(
                items.filter((current) => current.id !== item.id)
            )
        }
    }

    const editItem = (item) => {
        const input = window.prompt("Update Item", item.text)
        if (input) setItems(
            items.map((current) => (current.id === item.id) ? { ...current, text: input } : current)
        )
    }

    const clearItems = () => setItems([])

    return (
        <div className="wrapper bg-dark text-white">
            <Navbar items={items} clearItems={clearItems} />
            <div className="container pt-5">
                <div className="col-12 col-lg-6 mx-auto mt-5 border border-light rounded p-5">
                    {/* <h2>In container</h2> */}
                    <Form addItem={addItem} />
                    <List items={items} deleteItem={deleteItem} editItem={editItem} />
                </div>
            </div>
        </div>
    )
}