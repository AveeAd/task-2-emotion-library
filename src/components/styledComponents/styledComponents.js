import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export const Brand = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: hotpink;
  & a {
    text-decoration: none;
    color: hotpink;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & a {
    color: hotpink;
    text-decoration: none;
    margin: 0 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin: 0.5rem 0;
  ${({ bg, color, align, size }) =>
    `background-color: ${bg};color: ${color};text-align: ${align}; font-size: ${size}`};
`;

export const P = styled.p`
  text-align: justify;
  padding: 0.5rem;
  border-radius: 8px;
  ${({ bg, color, align, padding }) =>
    `background-color: ${bg};color: ${color};text-align: ${align}; padding: ${padding}`};
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  ${({ bg, color }) => `background-color: ${bg};color: ${color}`};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border: none;
  border-bottom: 2px solid #fff;
  border-radius: 8px;
  color: #fff;
  background-color: #fff2;
  &:focus {
    outline: 2px solid #fff;
  }
  &::placeholder {
    color: #fff;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: none;
  border-bottom: 2px solid #fff;
  border-radius: 8px;
  color: #fff;
  background-color: #fff2;
  &:focus {
    outline: none;
    background-color: #fff;
    color: #000;
    &::placeholder {
      color: #000;
    }
  }
  &::placeholder {
    color: #fff;
  }
  transition: all 0.3s ease-in-out;
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: 2px solid #fff;
  margin: 1rem auto;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #fff2;
  }
  & a {
    text-decoration: none;
    color: #fff;
  }
`;
