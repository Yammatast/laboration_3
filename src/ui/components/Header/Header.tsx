import React from "react";
import { LinkComponent, ProductCard, ProductCardProps } from "..";


export type HeaderProps = {
    navigation: {name: string, url: string}[];
}

export const Header : React.FC<HeaderProps> = ({ navigation}) => {
    return (
        <header>
            <nav>
                {navigation.map((e: any, i:number) =>{
                    return(
                    <div key={i}>
                        <LinkComponent url={e.url}>
                        {e.name}
                        </LinkComponent>
                    </div>
                    )
                })}
            </nav>
        </header>

    );
}
