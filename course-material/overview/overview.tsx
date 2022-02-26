import * as React from 'react';
import styled from 'styled-components';



const TopicBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    padding: 0.2em;
    font-variant: small-caps;
    margin: 1px auto;
    &:nth-child(odd) { background: #BBF; }
    &:nth-child(even) { background: #BBF; }
`;

const TopicChildren = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.2em;
`;

const TopicChildBlock = styled.div`
    text-decoration-line: none;
    & a {
        text-decoration-line: none;
    }
`;

const WeekBlock = styled.div`
    width: 2em;
    height: 2em;
    border-style: inset;
    text-align: center;
    line-height: 2em;
`;

const SlideBlock = styled(TopicChildBlock)``;

const ExerciseBlock = styled(TopicChildBlock)``;

const TopicDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-contents: flex-start;
    align-items: center;
    gap: 1em;
`;

const TopicName = styled.div`
    height: 2em;
    line-height: 2em;
`;

function Topic(props : { name: string, week: number, children ?: React.ReactNode })
{
    return (
        <TopicBlock>
            <TopicDescription>
                <Week week={props.week}/>
                <TopicName>
                    {props.name}
                </TopicName>
            </TopicDescription>
            <TopicChildren>
                {props.children}
            </TopicChildren>
        </TopicBlock>
    );
}

function Slides(props : { id: string })
{
    return (
        <SlideBlock>
            <a href={props.id}>📖</a>
        </SlideBlock>
    );
}

function Exercises(props : { id: string })
{
    return (
        <ExerciseBlock>
            <a href={props.id}>🔨</a>
        </ExerciseBlock>
    );
}

function Week(props: {week : number})
{
    return (
        <WeekBlock>
            {props.week}
        </WeekBlock>
    );
}

export function Overview(props : {})
{
    return (
        <>
            {topic(1, 'C++ Introduction', true, false, 'cpp-intro')}
            {topic(1, 'Declarations', true, true)}
            {topic(1, 'Preprocessor', true, true)}
            {topic(2, 'Allocation Methods', true, false)}
            {topic(2, 'Pointers', true, true)}
            {topic(3, "Heap Allocation", true, true)}
            {topic(3, "Arrays", true, true)}
            {topic(3, "Containers", true, true)}
            {topic(4, "Const", true, false)}
            {topic(4, "References", true, true)}
            {topic(5, "Classes (overview)", true, false)}
            {topic(5, "Constructors", true, false)}
            {topic(5, "Structs", true, false)}
            {topic(5, "sizeof", true, false)}
            {topic(5, "Const Correctness", true, false)}
            {topic(6, "Default Parameter Values", true, true)}
            {topic(6, "Operator Overloading", true, true)}
            {topic(6, "RAII", true, false)}
            {topic(6, "Smart Pointers", true, true)}
            {topic(7, "Inheritance", true, true)}
            {topic(7, "Templates", true, true)}
            {topic(7, "Casting", true, true)}
            {topic(8, "Performance", true, true)}
            {topic(8, "Technical Details", true, false)}
        </>
    );


    function topic(week : number, name : string, slides : boolean, exercises : boolean, id ?: string)
    {
        id = id || name.toLocaleLowerCase().replaceAll(' ', '-');

        return (
            <Topic name={name} week={week}>
                {slides ? <Slides id={id} /> : <></>}
                {exercises ? <Exercises id={id} /> : <></>}
            </Topic>
        );
    }
}


// export class Overview extends React.Component<IProps, IState>
// {
//     render()
//     {
//         // const me = this;

//         return (
//             <Table className={this.props.className}>
//                 <tbody>
//                     <HeaderRow>
//                         <WeekHeader>Week</WeekHeader>
//                         <Header>Topic</Header>
//                         <Header>Type</Header>
//                     </HeaderRow>
//                     {this.range(this.firstWeek, this.lastWeek + 1).map(i => this.renderWeek(i))}
//                 </tbody>
//             </Table>
//         );
//     }

//     private get firstWeek() : number { return 1; }

//     private get lastWeek() : number { return 8; }

//     private renderWeek(n : number) : JSX.Element
//     {
//         const rows = this.weekRows(n);

//         const elts = this.range(0, rows.length).map(i => {
//             if ( i === 0 )
//             {
//                 return (
//                     <Row>
//                         <Week rowSpan={rows.length}>{n}</Week>
//                         {rows[i]}
//                     </Row>
//                 );
//             }
//             else
//             {
//                 return (
//                     <Row>
//                         {rows[i]}
//                     </Row>
//                 );
//             }
//         });

//         return <React.Fragment>{elts}</React.Fragment>;
//     }

//     private weekRows(n : number) : JSX.Element[]
//     {
//         const weeks : JSX.Element[][] = [];

//         weeks[1] = [
//             theory('C++ Introduction', 'cpp-intro'),
//             theory('Declarations'),
//             lab('Declarations'),
//             theory('Preprocessor'),
//             lab('Preprocessor'),
//         ];

//         weeks[2] = [
//             theory('Allocation Methods'),
//             theory('Pointers'),
//             lab('Pointers'),
//         ];

//         weeks[3] = [
//             theory('Heap Allocation'),
//             lab('Heap Allocation'),
//             theory('Arrays'),
//             lab('Arrays'),
//             theory('Containers'),
//         ];

//         weeks[4] = [
//             theory('Const'),
//             lab('Types'),
//             theory('References'),
//             lab('References'),
//         ];

//         weeks[5] = [
//             theory('Classes (overview)', 'classes-overview'),
//             theory('Constructors'),
//             theory('Structs'),
//             theory('sizeof'),
//             theory('Const Correctness'),
//             lab('Types 2'),
//             lab('Classes'),
//         ];

//         weeks[6] = [
//             theory('Default Parameter Values'),
//             lab('Default Parameter Values'),
//             theory('Operator Overloading'),
//             lab('Operator Overloading'),
//             theory('RAII'),
//             theory('Smart Pointers'),
//             lab('Smart Pointers'),
//         ];

//         weeks[7] = [
//             theory('Inheritance'),
//             lab('Inheritance'),
//             theory('Templates'),
//             lab('Templates'),
//             theory('Casting', 'casts'),
//             lab('Casting', 'casts'),
//         ];

//         weeks[8] = [
//             theory('Performance (optional)', 'performance'),
//             lab('Performance (optional)', 'performance'),
//             theory('Bit Manipulation'),
//             theory('Technical Details'),
//         ];

//         return weeks[n];


//         function theory(caption : string, filename : string | null = null) : JSX.Element
//         {
//             if ( filename === null )
//             {
//                 filename = caption.toLowerCase().replace(' ', '-');
//             }

//             const url = `topics/${filename}.pdf`;

//             return <TheoryEntry caption={caption} url={url} />
//         }

//         function lab(caption : string, directoryName : string | null = null) : JSX.Element
//         {
//             if ( directoryName === null )
//             {
//                 directoryName = caption.toLowerCase();
//             }

//             const url = `labs/${directoryName}/index.html`;

//             return <LabEntry caption={caption} url={url} />
//         }
//     }

//     private range(a : number, b : number) : number[]
//     {
//         return a < b ? [ a, ...this.range(a + 1, b) ] : [];
//     }
// }
