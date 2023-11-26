import { JobPosition } from "./job-position.model"

export class JobApplication {
    id : number
    jobPositionId : number
    JobPosition? : JobPosition
    applicantName :string
    status : string
}