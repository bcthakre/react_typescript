

type PersonProps = {
    name: {
        first: string,
        last: string
    }
    age : {
        ageN : number
    }
}
export const Person = (props: PersonProps) => {
    return <div>{props.name.first} {props.name.last} and age is {props.age.ageN}</div>
}