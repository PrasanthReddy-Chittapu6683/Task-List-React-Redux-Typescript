import React, { FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setListToEdit, setNotification, updateList } from '../store/actions'
import { List } from '../store/Type'



interface EditListModalProps {
    list: List
}

const EditListModal: FC<EditListModalProps> = ({ list }) => {
    const [listName, setListName] = useState(list.name)
    const dispatch = useDispatch();

    const hideModalHandler = () => {
        dispatch(setListToEdit(''))
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (listName.trim() === '') {
            return alert('List Name  is required !!')
        }
        if (listName.trim() === list.name) {
            return alert('List Name  is same as before !!')
        }
        debugger;
        dispatch(updateList(list.id, listName.trim()))
        dispatch(setNotification(`List  ${list.name} updated !!`));
    }
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setListName(e.currentTarget.value);
    }
    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={hideModalHandler}> </div>
                <form className="modal-card" onSubmit={submitHandler}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">
                            Edit List
                       </p>
                        <button type='submit' className="delete" onClick={hideModalHandler}></button>
                    </header>
                    <div className="modal-card-body">
                        <div className="field">
                            <label className="label">List Name</label>
                            <div className="control">
                                <input className="input" type='text'
                                    name="listName"
                                    placeholder="List Name"
                                    value={listName}
                                    onChange={changeHandler}

                                />
                            </div>
                        </div>
                    </div>
                    <footer className="modal-card-foot">
                        <button className="button is-success" type="submit">Save Changes</button>
                        <button className="button" type="button" onClick={hideModalHandler}>Cancel</button>
                    </footer>
                </form>
           
        </div>
    )
}

export default EditListModal
