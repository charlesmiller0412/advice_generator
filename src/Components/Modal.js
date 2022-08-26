import { useEffect, useState } from "react";
import Dice from "../assets/icon-dice.svg";
import Divider from "./Divider";

export default function Modal() {
    const [quote, setQuote] = useState("");

    const fetchQuote = async () => {
        try {
            const response = await fetch("https://api.adviceslip.com/advice", {
                method: "GET",
                headers: { Accept: "application/json" },
            });
            const quote = await response.json();
            setQuote(quote.slip);
            console.log(quote);
            return;
        } catch (err) {
            console.error(err);
        }
        return;
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="Modal">
            <div className="Modal__advice">Advice # {quote.id}</div>
            <div className="Modal__quote">"{quote.advice}"</div>
            <Divider />
            <div className="Modal__button" onClick={fetchQuote}>
                <img src={Dice} alt="Roll the dice" />
            </div>
        </div>
    );
}
