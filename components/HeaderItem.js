 

function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-[#637b0c]"> 
        <Icon className="h-7 mb-1 group-hover:animate-bounce transition-all" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem