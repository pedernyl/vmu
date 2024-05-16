import Link from "next/link";

const Sidebar = ({
                     isOpen,
                     toggle,
                 }: {
    isOpen: boolean;
    toggle: () => void;
}): JSX.Element => {
    return (
        <>
            <div
                className="sidebar-container fixed w-full h-50 overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >

                <ul className="sidebar-nav text-center leading-relaxed text-xl">
                    <li>
                        <Link href="/#home" onClick={toggle}>
                            <p>Hjem</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={toggle}>
                            <p>Om</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/join" onClick={toggle}>
                            <p>Bli med</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/support" onClick={toggle}>
                            <p>Støtt</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts" onClick={toggle}>
                            <p>Kontakt</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;