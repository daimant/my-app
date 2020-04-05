import React, { useEffect, useState } from "react";

const ProfileStatus = ({ isOwner, updateStatus, ...props }) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if (isOwner) setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };
  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            <b>Статус:</b> {props.status || "Статуса нет"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          Статус:{" "}
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
