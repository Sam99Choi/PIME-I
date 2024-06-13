import IconGroup from "./FooterComponents/IconGroup";
import IconHome from "./FooterComponents/IconHome";
import IconPodium from "./FooterComponents/IconPodium";
import IconProfile from "./FooterComponents/IconProfile";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-12 bg-white ">
      <ul className="flex w-full h-full justify-around items-center border shadow">
        <li >
          <a href="/"> <IconHome/> </a>
        </li>
        <li>
          <a href="/amizades"><IconGroup/> </a>
        </li>
        <li>
          <a href="/ranking"><IconPodium/></a>
        </li>
        <li       className="hover:fill-lime-500">
          <a href="/perfil"><IconProfile/></a>
        </li>
      </ul>
    </footer>
  );
}
