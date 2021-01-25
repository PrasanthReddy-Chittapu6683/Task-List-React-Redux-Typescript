import React, { FC, FormEvent, useState } from 'react'
import { List } from '../store/Type'
import { useDispatch } from 'react-redux'
import { addList, setNotification } from '../store/actions'

const CreateNewList: FC = () => {

    const dispatch = useDispatch()

    const [listName, setListName] = useState('')

    const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setListName(e.currentTarget.value)
    }
    const submitCreateNewListHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (listName.trim() === '') {
            setListName('');
            return alert('List Name is required !!')
        }

        const newList: List = {
            id: `list-${new Date().getTime()}`,
            name: listName,
            tasks: []
        }
        dispatch(addList(newList));
        dispatch(setNotification(`New List ${newList.name} created >>> `));
        setListName('');

    }
    return (
        <div className="card mb-5">
            <div className="card-header">
                <p className="card-header-title"> Create New List </p>
            </div>
            <div className="card-content">
                <form onSubmit={submitCreateNewListHandler}>
                    <div className="field">
                        <label className="label">List Name</label>
                        <div className="control">
                            <input type="text" placeholder="List Name" name='listName' value={listName}
                                onChange={inputChangeHandler} className="input" />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary" type="submit"> Create </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CreateNewList
