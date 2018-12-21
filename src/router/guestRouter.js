import Dashboard from '@/views/dashboard/dashboard.vue';
import Positions from '@/views/positions/positions.vue';
import Profile from '@/views/profile/profile.vue';
import Candidates from '@/views/candidates/candidates.vue';

export default [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/positions',
    name: 'Positions',
    component: Positions,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: Candidates,
  },
];
