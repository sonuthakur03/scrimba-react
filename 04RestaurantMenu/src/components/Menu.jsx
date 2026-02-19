import MenuCategories from "./MenuCategories";

const Menu = () => {
  return (
    <div className="w-[75%] bg-amber-50 text-amber-950 p-8">
      <h2 className="p-4 text-center text-4xl font-black great-vibes-regular border-4 border-amber-900 w-[50%] shadow-[4px_4px_0px_rgba(0,0,0,1)] m-5 mx-auto">
        Himalayan Bites
      </h2>
      <section id="starters">
        <MenuCategories />
      </section>
      <section id="mainCourse"></section>
      <section id="dessert"></section>
    </div>
  );
};

export default Menu;
