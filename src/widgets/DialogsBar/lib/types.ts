export type DialogsBar_T = React.MemoExoticComponent<({ navigateToInfoPage, active, setNavbarActive }: {
    setNavbarActive: React.Dispatch<React.SetStateAction<boolean>>;
    navigateToInfoPage: () => void;
    active: boolean;
}) => JSX.Element>