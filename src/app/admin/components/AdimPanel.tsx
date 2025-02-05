// src/components/AdminPanel.tsx

import React from 'react';

interface AdminPanelProps {
  role: 'admin' | 'editor' | 'viewer' | undefined;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ role }) => {
  if (role === 'admin') {
    return (
      <div>
        <h1>Admin Panel</h1>
        <p>Welcome to the admin panel! Only admin users can see this content.</p>
        {/* Add more admin-specific content here */}
      </div>
    );
  } else if (role === 'editor') {
    return (
      <div>
        <h1>Editor Panel</h1>
        <p>Welcome to the editor panel! You can manage content here.</p>
        {/* Add more editor-specific content here */}
      </div>
    );
  } else if (role === 'viewer') {
    return (
      <div>
        <h1>Viewer Panel</h1>
        <p>Welcome, viewer! You can view content but have no editing rights.</p>
      </div>
    );
  }

  return <p>You do not have permission to view this page.</p>; // Display message for unauthorized users
};

export default AdminPanel;
