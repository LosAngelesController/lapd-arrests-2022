import ActiveLink from "./ActiveLink";
const navigationPayroll = [
  {
    name: "2019",
    url: "https://2019arrests.lacontroller.io/",
    newtab: true,
  },
  {
    name: "2020",
    url: "https://2020arrests.lacontroller.io/",
    newtab: true,
  },
  {
    name: "2021",
    url: "https://2021arrests.lacontroller.io/",
    newtab: true,
  },
  {
    name: "2022",
    url: "/",
  },
  {
    name: "Table",
    url: "https://docs.google.com/spreadsheets/d/1rH272RxRxU8ut3xArEnyOz2j_Qlw5ntEoTJlZwcx_Ng/edit?usp=sharing",
    newtab: true,
  },
  {
    name: "LA Controller",
    url: "https://controller.lacity.gov",
    newtab: true,
  },
];

function Nav() {
  return (
    <div className="z-50 bg-[#1a1a1a] flex flex-col">
      <nav className="z-50 flex flex-row  h-content">
        {navigationPayroll.map((item: any, itemIdx: any) => (
          <ActiveLink
            activeClassName="text-white py-2 md:py-3 px-3 block hover:text-green-300 focus:outline-none text-green-300 border-b-2 font-medium border-green-300"
            href={item.url}
            key={itemIdx}
            target={`${item.newtab === true ? "_blank" : ""}`}
          >
            <p className="text-white py-2 text-sm md:text-base md:py-3 px-3 block hover:text-green-300 focus:outline-none underline">
              {item.name}
            </p>
          </ActiveLink>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
