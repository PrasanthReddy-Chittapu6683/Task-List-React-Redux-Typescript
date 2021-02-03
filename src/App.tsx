import React, { FC } from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Notification from './components/Notification'
import { RootState } from './store/store';
import DeleteListModel from './components/DeleteListModal';
import EditListModal from './components/EditListModal';


//rafce : ArrowFunctionalComponent
const App: FC = () => {
  const notificationMsg = useSelector((state: RootState) => state.notificationReducer.message)
  const listIdToDelete = useSelector((state: RootState) => state.listReducer.listIdToDelete)
  const listIdToEdit = useSelector((state: RootState) => state.listReducer.listToEdit)
  return (
    <div className="App">
      <Header title="Task List App" subtitle="Create some list and add some tasks for each list" />
      <Notification msg={notificationMsg} />
      {/* <CreateNewList /> */}
      <div className="container px-5">
        <div className="column">
          <Sidebar />
        </div>
      </div>
     
      {listIdToDelete && <DeleteListModel listId={listIdToDelete} />}
      {listIdToEdit && <EditListModal list={listIdToEdit} />}
    </div>
  );
}

export default App;
