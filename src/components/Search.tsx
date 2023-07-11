import { StyledSearch } from './styles';
import { BiSearchAlt2 } from 'react-icons/bi';
import { ChangeEvent } from "react";

interface TextInputProps {
    onChange:(event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput(props: TextInputProps) {
    return(
        <StyledSearch>
            <BiSearchAlt2 />
            <input 
                type="text" 
                placeholder="Search Your Favorite Character" 
                name="name"
                id="name"
                onChange={props.onChange}
            />
        </StyledSearch>
    )
}