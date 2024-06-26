import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { removeFormData } from "../../redux/slices/payformSlice";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { clearCart } from "../../redux/slices/cartSlice";
import { useDarkMode } from "../darkmode/DarkmodeContext";
import "./thankYouPage.scss";

export function ThankYouPageDelivery() {

    const totalPrice = useAppSelector((state) => state.cart.totalPrice);
    const totalPricePromo = useAppSelector((state) => state.cart.totalPricePromo)
    const activePromo = useAppSelector((state) => state.cart.activePromo);
    const formData = useAppSelector((state) => state.payformData);
    const location = useLocation()
    const delivery = location.state.delivery
    const dispatch = useAppDispatch();
    const { mode } = useDarkMode();
    const navigate = useNavigate();
 
    function handleBtn() {
        navigate("/");
        dispatch(removeFormData());
        dispatch(clearCart());
    }

    return (
        <div className={`thankyou-container ${mode}`}>
            <div className={`thankyou-line ${mode}`}></div>
            <h2 className={mode}>
                <FormattedMessage
                    id="thankYou.title"
                    defaultMessage="Thank you!"
                />
            </h2>
            <p>
                <FormattedMessage
                    id="thankYou.message"
                    defaultMessage="Gentile {name}, grazie per l'acquisto. Non appena l'ordine sarà spedito, ti invieremo un'email all'indirizzo {email} con le informazioni di tracciamento."
                    values={{ name: formData.name, email: formData.email }}
                />
            </p>
            <p>
                <FormattedMessage
                    id="thankYou.orderTotal"
                    defaultMessage="Your order: {total} {currency}"
                    values={{
                        total: <FormattedNumber value={delivery ? (activePromo ? totalPricePromo + 10 : totalPrice + 10) : (activePromo ? totalPricePromo : totalPrice)} style="currency" currency="EUR" />,
                        currency: (
                            <FormattedMessage
                                id="currency"
                                defaultMessage="$"
                            />
                        ),
                    }}
                />
            </p>
            <div className={`thankyou-line ${mode}`}></div>
            <button className={`thankyou-btn ${mode}`} onClick={handleBtn}>
                <FormattedMessage
                    id="thankYou.button.home"
                    defaultMessage="HOME"
                />
            </button>
        </div>
    );
}
