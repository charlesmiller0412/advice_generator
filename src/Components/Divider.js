import DividerMobile from "../assets/pattern-divider-mobile.svg";
import DividerDesktop from "../assets/pattern-divider-desktop.svg";

export default function Divider() {
    return (
        <div className="Modal__divider">
            <img
                src={DividerMobile}
                alt="divider"
                className="Modal__dividerMobile"
            />
            <img
                src={DividerDesktop}
                alt="divider"
                className="Modal__dividerDesktop"
            />
        </div>
    );
}
