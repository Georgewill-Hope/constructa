const Wrap = ({children, wrapStyles}) => {
  return (
    <div className={`w-[100%] mx-auto ${wrapStyles}`} >
      {children}
    </div>
  )
}

export default Wrap
