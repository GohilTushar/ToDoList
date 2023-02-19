import React, { useState} from 'react'
import todo from './images/Logo.png';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [isEditItem, setIsEditItem] = useState('');

    const addItem = () => {
        if (!inputData) {
            alert('please fill data');
        } else {
            setItems([...items, inputData])
            setInputData('');

        } 
    }
    // delete the items
    const deleteItem = (index) => {
        const updateditems = items.filter((elem,id) => {
            return index !== id;
        });

        setItems(updateditems);
    }

    const editItem = (index) => {
        let newEditItem = items.find((elem,id) => {
            return index === id
        });
        setIsEditItem(index);
        setInputData(newEditItem);
    }
    // remove all 
    const removeAll = () => {
        setItems([]);
    }   

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} style={{height:"50px",width:"60px"}} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}/>
                            <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}/>
                    </div>
                    <div className="showItems">{
                            items.map((elem,id) => {
                                return (
                                    <div className="eachItem" key={id}>
                                        <h3>{elem}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(id)}></i>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo