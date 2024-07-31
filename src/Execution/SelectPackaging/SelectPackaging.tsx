import { PackagingButtons } from "../../Elements/Buttons";

export default function SelectPackaging() {
    return (
        <main>
            <h2>Por favor, selecciona tu método de empaquetado.</h2>

            <div>
                <PackagingButtons to='/home' className='a' text='Comer aquí' />
                <PackagingButtons to='/home' className='a' text='Para llevar' />
            </div>
        </main>
    )
}