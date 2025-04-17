import { Link, NavLink } from 'react-router';

import { Avatar } from 'primereact/avatar';

export default function TopHeader() {
  const navOptions = {
    Home: '/',
    Users: '/users',
    Contact: '/contacts',
  };

  const navStyles =
    "h-auto px-2 py-1 relative after:content-[''] after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-slate-500 after:absolute hover:after:w-full after:transition-all after:duration-200 after:rounded-md italic";

  const navOptionLink = (key: string, value: string) => {
    return (
      <NavLink
        key={key}
        to={value}
        className={({ isActive }) =>
          navStyles.concat(' ', isActive ? 'after:w-full' : '')
        }>
        {key}
      </NavLink>
    );
  };

  return (
    <div className="bg-white flex justify-between p-2 items-center">
      <section className="flex flex-row gap-5">
        {Object.entries(navOptions).map(([key, value]) =>
          navOptionLink(key, value)
        )}
      </section>
      <section>
        <Link to="/auth/login">
          <Avatar
            label="U"
            size="large"
            shape="circle"
            className=" bg-amber-500"
          />
        </Link>
      </section>
    </div>
  );
}
