import anon from './anon'
import drawerUK from './drawerUK'
import editionsUK from './editionsUK'
import navbarRight from './navbarRight'
import navbarRightAnon from './navbarRightAnon'
import navbarSimple from './navbarSimple'
import navbarUK from './navbarUK'
import subNavigation from './subNavigationProfile'
import user from './user'

import { THeaderProps } from '../../src/tsx/Props'

const breadcrumb = subNavigation.ancestors.concat(subNavigation.item)
const subsections = subNavigation.children

const data: THeaderProps = {
  userIsAnonymous: false,
  userIsLoggedIn: true,
  showSubNavigation: true,
  showUserNavigation: false,
  showStickyHeader: true,
  data: {
    account: null,
    anon,
    breadcrumb,
    drawer: drawerUK,
    editions: editionsUK,
    footer: null,
    navbar: navbarUK,
    'navbar-right': navbarRight,
    'navbar-right-anon': navbarRightAnon,
    'navbar-simple': navbarSimple,
    subsections,
    'subsections-right': [
      {
        label: 'Sign Out',
        url: '#'
      }
    ],
    user
  }
}

export default data
