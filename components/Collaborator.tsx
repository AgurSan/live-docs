import React, { useState } from "react";

const Collaborator = ({
  roomId,
  creatorId,
  collaborator,
  email,
  user,
}: CollaboratorProps) => {
  const [userType, setUserType] = useState(collaborator.userType || "viewer");
  const [loading, setLoading] = useState(false);

  const shareDocumentHandler = async (type: string) => {};
  const rremoveCollaboratorHandler = async (email: string) => {};

  //TODO: end the modal
  return <div>Collaborator</div>;
};

export default Collaborator;
