import NoPriorityIcon from '../icons/No-priority.svg';
import LowPriorityIcon from '../icons/Img - Low Priority.svg';
import MediumPriorityIcon from '../icons/Img - Medium Priority.svg';
import HighPriorityIcon from '../icons/Img - High Priority.svg';
import UrgentPriorityIcon from '../icons/SVG - Urgent priority grey.svg';

import BacklogIcon from '../icons/Backlog.svg';
import TodoIcon from '../icons/To-do.svg';
import InProgressIcon from '../icons/in-progress.svg';
import DoneIcon from '../icons/Done.svg';
import CanceledIcon from '../icons/Cancelled.svg';

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={NoPriorityIcon} size={14} />
        case "Low": return <img src={LowPriorityIcon} size={14} />
        case "Medium": return <img src={MediumPriorityIcon} size={14} />
        case "High": return <img src={HighPriorityIcon} size={14} />
        case "Urgent": return <img src={UrgentPriorityIcon} size={14} />
        default: return <img src={UrgentPriorityIcon} size={14} />
    }
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src={BacklogIcon} size={24} />
        case "Todo": return <img src={TodoIcon} size={24} />
        case "In progress": return <img src={InProgressIcon} size={16} />
        case "Done": return <img src={DoneIcon} size={16} />
        case "Canceled": return <img src={CanceledIcon} size={16} />
        default: return <img src={TodoIcon} size={16} />
    }
}