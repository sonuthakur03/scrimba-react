import MenuSections from "./MenuSections";

const Menu = ({ restaurant }) => {
  const dessert = restaurant.menuSections.filter(
    (section) => section.title === "Dessert",
  );
  const others = restaurant.menuSections.filter(
    (section) => section.title != "Dessert",
  );
  return (
    <>
      <div
        className="w-[75%] text-amber-950 p-8 
  bg-linear-to-r 
  from-amber-50 
  from-60% 
  to-amber-200 
  to-40%"
      >
        <h2 className="p-4 text-center text-4xl font-black great-vibes-regular border-4 border-amber-900 w-[50%] shadow-[4px_4px_0px_rgba(0,0,0,1)] m-5 mx-auto">
          {restaurant.restaurantName}
        </h2>
        <main className="flex w-full gap-8">
          <section id="starters" className="w-3/5">
            {others.map((section) => {
              return <MenuSections key={section.id} section={section} />;
            })}
          </section>
          <section id="dessert" className="w-2/5">
            {dessert.map((section) => {
              return <MenuSections key={section.id} section={section} />;
            })}
          </section>
        </main>
      </div>
    </>
  );
};

export default Menu;
