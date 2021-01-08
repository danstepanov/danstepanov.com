import Footer from "./Footer";

export default function Container({ children }) {
    return (
        <div className="bg-white pt-24">
            <main className="flex flex-col justify-center bg-white px-8 ">
                {children}
                <Footer />
            </main>
        </div>
    )
}