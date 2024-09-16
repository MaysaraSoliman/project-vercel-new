import { it, expect, describe } from 'vitest'
import {render, screen} from "@testing-library/react"
import Pakery from './Pakery'
import "@testing-library/jest-dom/vitest"

describe('pakery component', () => {
    it('should', () => {
        render(<Pakery />)
        const mini = screen.getByTestId("mini");
        expect(mini).toBeInTheDocument()
    })
    it('should render 6 heading in pakery component', () => {
        render(<Pakery />)
        const heading = screen.getAllByRole('heading');
        expect(heading).toHaveLength(6)
    })
    it.only('should render 6 heading in pakery component', () => {
        render(<Pakery />)
        const images = screen.getAllByRole('img');
        for(let i =0; i < 3; i++){
            if(images[i].getAttribute('src') === '/src/assets/pakery/banner3.jpg'){
                return expect(images[i]).toHaveAttribute('src' , '/src/assets/pakery/banner3.jpg')
            }
        }
    })
})