import { FC, memo } from "react";

const Categories: FC = () => {
    return (
        <div className="categories">
            <h2 className="medium">Каталог</h2>
            <div className="categories__content">
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
                <div className="categories__item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8333 15H9.16667M9.16667 15V17.5C9.16667 17.9166 8.83333 18.3333 8.33333 18.3333C7.83333 18.3333 7.5 17.9166 7.5 17.5V15H9.16667ZM12.5 15V17.5C12.5 17.9166 12.1667 18.3333 11.6667 18.3333C11.1667 18.3333 10.8333 17.9166 10.8333 17.5V15H12.5ZM14.1667 9.16665V13.3333C14.1667 14.25 13.4167 15 12.5 15H7.5C6.58333 15 5.83333 14.25 5.83333 13.3333V9.16665C5.83333 8.24998 6.58333 7.49998 7.5 7.49998H12.5C13.4167 7.49998 14.1667 8.24998 14.1667 9.16665ZM4.16667 9.16665V12.5C4.16667 13 3.83333 13.3333 3.33333 13.3333C2.83333 13.3333 2.5 13 2.5 12.5V9.16665C2.5 8.66665 2.83333 8.33331 3.33333 8.33331C3.83333 8.33331 4.16667 8.66665 4.16667 9.16665ZM17.5 9.16665V12.5C17.5 13 17.1667 13.3333 16.6667 13.3333C16.1667 13.3333 15.8333 13 15.8333 12.5V9.16665C15.8333 8.66665 16.1667 8.33331 16.6667 8.33331C17.1667 8.33331 17.5 8.66665 17.5 9.16665ZM8 5.83331H12C12.75 5.83331 13.3333 5.20831 13.3333 4.40498C13.3333 2.44081 11.8333 0.833313 10 0.833313C8.16667 0.833313 6.66667 2.44081 6.66667 4.40498C6.66667 5.20831 7.25 5.83331 8 5.83331Z"
                            stroke="#98A8F8"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="small">Інтерактивні</p>
                </div>
            </div>
        </div>
    );
};

export default memo(Categories);
