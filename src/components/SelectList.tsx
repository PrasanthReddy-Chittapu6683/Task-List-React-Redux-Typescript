import React, { FC, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from '../store/Type';
import { setSelectedList } from '../store/actions'
import { RootState } from '../store/store';



const SelectList: FC = () => {
    const dispatch = useDispatch();
    const lists = useSelector((state: RootState) => state.listReducer.lists)
    const selectChangeHandler = (e: FormEvent<HTMLSelectElement) => {
        dispatch(setSelectedList(e.currentTarget.value))
    }
    return (
        <section>
            <h2 className="is-size-4 has-text-centered mb-4">Choose a list</h2>
            <div className="filed mb-5">
                <div className="control has-icons-left">
                    <select className="fullwidth" onChange={selectChangeHandler}>
                        <option value="">Select List</option>
                    </select>
                </div>
                <div className="icon is-small is-left">
                    <i className="fas fa-list"></i>
                </div>

            </div>
        </section>
    )
}

export default SelectList
