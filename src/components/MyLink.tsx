import Instagram from './Instagram'
import Etsy from './Etsy'

type Props = {
  url: string
  newTab?: boolean | false
  title?: string
  icon: 'etsy' | 'instagram'
}

const MyLink = ({ url, newTab, title, icon }: Props) => {
  return (
    <li className='hover:text-slate-400 transition-all duration-300'>
      <a className='text-8xl' href={url} target={`${newTab ? '_blank' : ''}`}>
        {title && title}
        {icon === 'instagram' && <Instagram />}
        {icon === 'etsy' && <Etsy />}
      </a>
    </li>
  )
}

export default MyLink
