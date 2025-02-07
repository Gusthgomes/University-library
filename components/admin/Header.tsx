import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
    return (
        <header className="admin-header">
            <div>
                <h2 className="text-2xl font-semibold text-dark-400">
                    {session?.user?.name}
                </h2>
                <p className="text-base text-slate-500">
                    Monitore todos os usuários e livros por aqui!
                </p>
            </div>
        </header>
    );
};
export default Header;