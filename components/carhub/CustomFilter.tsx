

export interface CustomFilterProps {
  title: string
}
export const CustomFilter = ({title}:CustomFilterProps) => {
  return (
    <div>{title}</div>
  )
}
