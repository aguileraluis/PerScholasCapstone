import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskDialog = () => {
  const [open, setOpen] = useState(false); 
  const [openEdit, setOpenEdit] = useState(false); 
  const [openDialog, setOpenDialog] = useState(false); 

  const navigate = useNavigate(); 
  return (
    <div>
      TaskDialog
    </div>
  )
};

export default TaskDialog;
