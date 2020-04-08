class Array03
{
	public static void main(String[] args) 
	{
	
	//int j [행] [열]  = new int [3] [2]
	//2차원 배열의 생성 
	int jumsu[][];//배열명만 정의 메모리 할당 되지 않음
	jumsu = new int[4][3];//12개의 데이트를 저장 할 수 있는 변수 생성
	
	int test[][]= new int [5][4]; 

	//두번째 학생의 영어점수 80으로 저장 
	jumsu[1][1]=80;
	jumsu[2][2]=10;


	//배열의 모든 데이터 접근하는 방법
	//2차원 배열은 행의 수 배열명.length
	//				칸수 배열명 [행의 index].length
	for (int row=0; row<jumsu.length;row++ ){//행 0,1,2,3까지 생성 
		for (int col = 0;col<jumsu[row].length;col++ ){//열 0.1.2
			System.out.printf("%5d",jumsu[row][col]);
			}
			System.out.println();
		}
		//2차원 배열의 초기값 지정하는 방법
		//                           {{1행},{2행}}
		//						  0  1  2  3 4행								
		int data[][]=new int[][]{{50,30,40,0,0},
								 {56,88,99,0,0},
								 {88,70,80,0,0},
								 {55,33,44,0,0},
								 {51,89,97,0,0},
								 {89,71,81,0,0},
								 {0,0,  0,0,0}};

		//총점계산
		for (int row =0; row <data.length-1 ;row++ ){//0,1,2,3,4,5
			for (int col =0;col<data[row].length-2 ;col++ ){//0,1,2
				data[row][3] += data[row][col];//합계
				data[data.length-1][col]+=data[row][col];//과목별총점 
			
					
		}
		
			data[row][4]=data[row][3] /3;

		}
			
		//출력하기전
	for (int row=0;row<data.length;row++ )
		{for (int col=0;col<data[row].length;col++ )
		{System.out.print(data[row][col]+"\t");
		}
		System.out.println();
			
		}

		
	}
}


/*
2차원 배열 : 행과 열이 있는 배열구조
			 같은 데이터형을 저장할수 있다.
			 배열생성후 크기를 변경할 수 없다.
*/
