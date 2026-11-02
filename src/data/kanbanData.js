import avatar1 from '../assets/images/avatar-1.png'
import avatar2 from '../assets/images/avatar-2.png'
import avatar3 from '../assets/images/avatar-3.png'
import attachUi3d from '../assets/images/task-attach-ui3d.png'
import attachMobile from '../assets/images/task-attach-mobile.png'
import attachColors from '../assets/images/chat-attach-1.png'
import attachDarkDash from '../assets/images/task-attach-darkdash.png'

export const initialKanbanColumns = [
  {
    id: 'todo',
    title: 'ToDo',
    tasks: [
      {
        id: 't-1',
        title: 'Dashboard Design',
        completed: false,
        badges: [
          { text: 'Low', color: 'bg-[#FF8691] text-white' },
          { text: 'On Track', color: 'bg-[#FFCC5C] text-[#6B4E00]' }
        ],
        description: 'Discussion for management dashboard ui design',
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      },
      {
        id: 't-2',
        title: 'Landing page Design',
        completed: false,
        badges: [
          { text: 'Medium', color: 'bg-[#FF9066] text-white' },
          { text: 'At risk', color: 'bg-[#E53935] text-white' }
        ],
        description: 'Discussion for management dashboard ui design',
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      },
      {
        id: 't-3',
        title: 'E-Shop Mobile App',
        completed: false,
        badges: [
          { text: 'High', color: 'bg-[#00D0FF] text-white' }
        ],
        description: 'Discussion for management dashboard ui design',
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      },
      {
        id: 't-4',
        title: 'Dashboard Design',
        completed: false,
        badges: [
          { text: 'Low', color: 'bg-[#FF8691] text-white' },
          { text: 'On Track', color: 'bg-[#FFCC5C] text-[#6B4E00]' }
        ],
        description: 'Discussion for management dashboard ui design',
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      {
        id: 't-5',
        title: 'Dashboard Design',
        completed: true,
        badges: [
          { text: 'High', color: 'bg-[#00D0FF] text-white' },
          { text: 'On Track', color: 'bg-[#FFCC5C] text-[#6B4E00]' }
        ],
        description: 'Discussion for management dashboard ui design',
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      },
      {
        id: 't-6',
        title: 'Landing page Design',
        completed: true,
        badges: [
          { text: 'Low', color: 'bg-[#FF8691] text-white' }
        ],
        description: 'Discussion for management dashboard ui design',
        attachments: [attachMobile, attachUi3d],
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      },
      {
        id: 't-7',
        title: 'E-Shop Mobile App',
        completed: false,
        badges: [
          { text: 'Low', color: 'bg-[#FF8691] text-white' },
          { text: 'On Track', color: 'bg-[#FFCC5C] text-[#6B4E00]' }
        ],
        description: 'Discussion for management dashboard ui design',
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      }
    ]
  },
  {
    id: 'in-review',
    title: 'In Review',
    tasks: [
      {
        id: 't-8',
        title: 'Dashboard Design',
        completed: true,
        badges: [
          { text: 'Medium', color: 'bg-[#FF9066] text-white' }
        ],
        description: 'Discussion for management dashboard ui design',
        attachment: attachColors,
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      },
      {
        id: 't-9',
        title: 'E-Shop Mobile App',
        completed: true,
        badges: [
          { text: 'Low', color: 'bg-[#FF8691] text-white' }
        ],
        description: 'Discussion for management dashboard ui design',
        attachments: [attachMobile, attachUi3d],
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: 't-10',
        title: 'Dashboard Design',
        completed: true,
        badges: [
          { text: 'High', color: 'bg-[#00D0FF] text-white' },
          { text: 'On Track', color: 'bg-[#FFCC5C] text-[#6B4E00]' }
        ],
        description: 'Discussion for management dashboard ui design',
        attachments: [attachColors, attachDarkDash],
        avatars: [avatar1, avatar2, avatar3],
        comments: 112,
        likes: '1.2k'
      }
    ]
  }
]
