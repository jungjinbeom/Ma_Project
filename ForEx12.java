import java.util.Scanner;
class ForEx12
{
	public static void main(String[] args) 
	{
				
		//정수입력을 위한 스캐너 할당
		Scanner scanner = new Scanner(System.in);
		//정수를 입력
		System.out.printf("정수(홀수) : ");
		//입력한 정수가 저장될 변수
		int pushNum = scanner.nextInt();

		//짝수일때, 홀수로 바꾸는 조건문
		if(pushNum % 2 == 0){
			pushNum++;
		}
		System.out.printf("입력한 숫자(변경된 숫자) : %d\n", pushNum);

		// 'A' 는 65
		// 'Z' 는 90 이다.
		char ch = 'A';
		
		//
		int step =2;
		//윗부분 삼각형
		for(int max = 1; max >= 1; max+=step){
			//공백을 그려보자.
			//공백은 (전체 문자수(pushNum) - 출력된 문자수) /2 이다.
			for(int space1 = 1; space1 <= (pushNum - max) / 2; space1++){
				System.out.printf(" ");
			}
			//영어단어를 출력해보자.
			for(int col1 = 1; col1 <= max; col1++){
				System.out.printf("%c",ch);
				ch++;
				if(ch > 'Z'){
					ch = 'A';
				}
			}
			//한줄넘기기
			System.out.printf("\n");

			if(pushNum == max){
				step = -2;
			}
		}
	}
}

