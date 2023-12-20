import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

// SideBar example
function SideBar() {
    return (
      <>
        <Navigation
            activeItemId="/management/members"
            onSelect={({itemId}) => {
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
              },
              {
                title: 'Management',
                itemId: '/management',
                subNav: [
                  {
                    title: 'Projects',
                    itemId: '/management/projects',
                  },
                  {
                    title: 'Members',
                    itemId: '/management/members',
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
      </>
    );
}

export default SideBar;