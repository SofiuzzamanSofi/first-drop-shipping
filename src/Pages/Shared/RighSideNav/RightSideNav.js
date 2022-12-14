import React from 'react';

const RightSideNav = () => {
    return (
        <div>
            {/* <ul className="menu w-56 bg-secondary text-secondary-content p-2 rounded-r-box">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
            </ul> */}
            <aside className="w-full p-6  dark:bg-gray-900 dark:text-gray-100 lg:text-right  rounded-r-md">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Installation</a>
                            <a rel="noopener noreferrer" href="#">Plugins</a>
                            <a rel="noopener noreferrer" href="#">Migrations</a>
                            <a rel="noopener noreferrer" href="#">Appearance</a>
                            <a rel="noopener noreferrer" href="#">Mamba UI</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Dashboard</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Header</a>
                            <a rel="noopener noreferrer" href="#">Drawer</a>
                            <a rel="noopener noreferrer" href="#">Page Title</a>
                            <a rel="noopener noreferrer" href="#">Menus</a>
                            <a rel="noopener noreferrer" href="#">Sidebar</a>
                            <a rel="noopener noreferrer" href="#">Footer</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Pages</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Homepage</a>
                            <a rel="noopener noreferrer" href="#">Users</a>
                            <a rel="noopener noreferrer" href="#">Tools</a>
                            <a rel="noopener noreferrer" href="#">Settings</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Misc</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Tutorials</a>
                            <a rel="noopener noreferrer" href="#">Changelog</a>
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default RightSideNav;