import * as S from "./styles";

function Input({
  label,
  icon,
  placeholder = "Digite aqui...",
  type = "text",
  value,
  onChange,
  disabled = false,
  required = false,
  error = false,
  errorMessage = "",
  ...props
}) {
  return (
    <S.InputContainer>
      {label && (
        <S.InputLabel required={required} error={error}>
          {label}
        </S.InputLabel>
      )}

      <S.InputWrapper error={error} disabled={disabled}>
        {icon && (
          <S.InputIconWrapper>
            {icon}
          </S.InputIconWrapper>
        )}

        <S.StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          hasIcon={!!icon}
          {...props}
        />
      </S.InputWrapper>

      {error && errorMessage && (
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      )}
    </S.InputContainer>
  );
}

export default Input;