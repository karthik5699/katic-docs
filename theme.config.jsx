import { useRouter } from 'next/router' 
import { useNextSeoProps } from 'nextra-theme-docs'
import { Callout } from 'nextra/components'

export default {
    logo: <span>Katic</span>,
    project: {
      link: 'https://github.com/karthik5699',
    },
    useNextSeoProps() {
      return {
        title: 'Katic - Personal Blog', 
        description: 'my home on the internet.'
      }
    }
  }