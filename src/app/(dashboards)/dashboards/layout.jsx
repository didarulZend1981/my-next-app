import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-grren-400 p-6">Dash board DashboardLayout</div>
     {children}
     <footer>
      dashboard footer
     </footer>
    
    </div>
  );
};

export default DashboardLayout