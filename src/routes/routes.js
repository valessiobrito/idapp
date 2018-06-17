import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Perfil from '@/pages/Perfil.vue'
import Documents from '@/pages/Documents.vue'
import Enderecos from '@/pages/Enderecos.vue'
import Aprovacoes from '@/pages/Aprovacoes.vue'
import Medalhas from '@/pages/Medalhas.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/perfil',
    children: [
      {
        path: 'perfil',
        name: 'Perfil',
        component: Perfil
      },
      {
        path: 'documentos',
        name: 'Documentos',
        component: Documents
      },
      {
        path: 'enderecos',
        name: 'Endereços',
        component: Enderecos
      },
      {
        path: 'aprovacoes',
        name: 'Aprovações',
        component: Aprovacoes
      },
      {
        path: 'medalhas',
        name: 'Medalhas',
        component: Medalhas
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  }
]

export default routes
