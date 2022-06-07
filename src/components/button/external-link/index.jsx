import { ButtonContent } from ".."

const ExternalLink = ({
  children,
  variation,
  size = 'normal',
  icon,
  iconPosition = 'only',
  iconRotate,
  className,
  ...rest
}) => {
  return (
    <a
      rel='noopenner noreferrer'
      target="_blank"
      {...rest}
      style={{color:"#FF2525"}}
      className="">
      <ButtonContent {...{ icon, iconPosition, iconRotate, children }} />
    </a>      
  )
}

export default ExternalLink