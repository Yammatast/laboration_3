'use client'
import React from "react";
import { Button } from "..";
import { showToast } from "@/helpers/toast";


export type FooterProps = {

}

export const Footer : React.FC<FooterProps> = ({ }) => {

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        showToast("info", <span>Your complaint has been registered</span>);
    }
    return (
        <footer>
            <form className="contact-info">
                <label htmlFor="email">Complaints??? :&#41; enter your email and we will be in touch</label>
                <input type="email" id="email" name="email" placeholder="email"/>
                <Button onClickEvent={(e) => clickHandler(e)} type="submit">
                    Send complaint
                </Button>
            </form>
        </footer>
    );
}
