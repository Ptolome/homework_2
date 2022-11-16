import React from "react";

export const Page = () => {
    const logoUrl = "https://picsum.photos/100";
    //  const logoUrl = "";
    const siteName = "example.com";


    return (
        <> <header className="d-flex  align-items-center w-100"> {/** Добавил стилей */}
                {
                /*
                * logoUrl && "me-4" - означает, что если есть логотип, то добавь класс "me-4"
                * можно сделать logoUrl ? "me-4" : "me-2" если хотим вывести
                * класс "me-2", когда логотипа нет
                */
                }
                <div className={logoUrl && "spinner-gro"}>{siteName}</div>
                {logoUrl && <img src={logoUrl} alt="logo" />}
            </header>
            <footer>подвал</footer>
        </>
    )
        
}