import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { getLists, setListIdToDelete, setListToEdit } from '../store/actions'
import { List } from '../store/Type'
const Lists: FC = () => {
    const dispatch = useDispatch()
    const lists = useSelector((state: RootState) => state.listReducer.lists)
    useEffect(() => {
        dispatch(getLists());
        return () => {

        }
    }, [dispatch]);
    const setListToEditHandler = (id: string) => {
        dispatch(setListToEdit(id))
    }
    const setListToDelete = (id: string) => {
        dispatch(setListIdToDelete(id))
    }
    return (
        <div className="panel is-primary">
            <p className="panel-heading">Your lists</p>
            <div>
                {Object.keys(lists).length === 0
                    ?
                    <p className="py-4 has-text-centered">No Lists</p>
                    :
                    <div>
                        {Object.values(lists).map((lst: List) => {
                            return <div className="panel-block py-3" key={lst.id}>
                                <p onClick={() => setListToEditHandler(lst.id)}>{lst.name}</p>
                                <span className="panel-icon has-text-danger" >
                                    <i className="fas fa-times-circle" onClick={() => setListToDelete(lst.id)}></i>
                                </span>
                            </div>


                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default Lists
